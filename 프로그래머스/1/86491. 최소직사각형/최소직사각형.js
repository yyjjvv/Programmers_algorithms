function solution(sizes) {
    const reversed = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);
    let width = [0, 0];

    reversed.forEach(([w, h]) => {
        if (w > width[0]) width[0] = w;
        if (h > width[1]) width[1] = h;
    })
    
    return width[0] * width[1];
}