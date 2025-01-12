a = source;
b = 0;
c = 0;
d = 0;
for (;;) {
    sink(d);
    d = c;
    c = b;
    b = a;
}