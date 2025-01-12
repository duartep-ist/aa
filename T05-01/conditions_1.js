a = 0;
if (source1) {
	if (source2) {
		a = 1;
	}
}
b = 0;
if (sanitizer(a + source3)) {
	b = 1;
}
sink(b);
