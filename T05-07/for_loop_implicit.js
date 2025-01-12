a = source('start');
c = "";
for (let i = 0; i < 10; i++) {
    if (i == a) {
        c = c + "xpto1";
        i = source(i);
    }
}
sink(c);
