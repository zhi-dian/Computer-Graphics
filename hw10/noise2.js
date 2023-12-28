
var noise2P, noise2U, noise2V;

function noise2(x, y) {
    if (noise2P == undefined) {
        var p = [], u = [], v = [], i, j;
        for (i = 0 ; i < 256 ; i++) {
            p[i] = i;
            u[i] = 2 * random() - 1;
	    v[i] = 2 * random() - 1;
            var s = sqrt(u[i]*u[i] + v[i]*v[i]);
            u[i] /= s;
            v[i] /= s;
        }
        while (--i) {
            var k = p[i];
            p[i] = p[j = floor(256 * random())];
            p[j] = k;
        }
        for (i = 0 ; i < 256 + 2 ; i++) {
            p[256 + i] = p[i];
            u[256 + i] = u[i];
            v[256 + i] = v[i];
        }
        noise2P = p;
        noise2U = u;
        noise2V = v;
    }

    var P = noise2P, U = noise2U, V = noise2V;

    x = (x + 4096) % 256;
    y = (y + 4096) % 256;

    var i = floor(x), u = x - i, s = sCurve(u);
    var j = floor(y), v = y - j, t = sCurve(v);

    var a = P[P[i] + j  ], b = P[P[i+1] + j  ];
    var c = P[P[i] + j+1], d = P[P[i+1] + j+1];

    return lerp(t, lerp(s, u   *U[a] +  v   *V[a],
                          (u-1)*U[b] +  v   *V[b]),
                   lerp(s, u   *U[c] + (v-1)*V[c],
		          (u-1)*U[d] + (v-1)*V[d]));
}

