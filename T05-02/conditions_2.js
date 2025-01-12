a = 0;
if (source1) {} else {
	if (source2); else {
		a = 1;
	}
}
b = 0;
if (sanitizer(a + source3)) 0; else {
	b = 1;
}
sink(b);
