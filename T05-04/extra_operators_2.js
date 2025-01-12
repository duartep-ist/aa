sink = source++;
sink = ++source;
sink = (a = "");
sink = (b += ""); // b was not assigned a value prior to this so it's tainted
sink = (c = source);
d = "";
sink = (d += source);
