try {
    a = b('start');
    if (a === 'error') {
        throw new Error('An error occurred');
    }
    c = s(a);
} catch (e) {
    console.log(e.message);
} finally {
    if (c === 'default') {
        w(c);
    } else {
        t(a);
    }
}
