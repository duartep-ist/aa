try {
	a = source;
} catch (err) {
	sink(a);
} finally {
	sink(a);
}
