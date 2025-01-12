try {
    x = source();
} catch (e) {
    console.log(e);
} finally {
    sink(x);
}
