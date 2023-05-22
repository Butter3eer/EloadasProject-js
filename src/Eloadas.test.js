const Eloadas = require('./Eloadas');

let eloadas = new Eloadas(10, 10);
test('Alsó határoknál errort dob vissza', () => {
    expect(() => new Eloadas(0, 0)).toThrow("A bevitelnek pozitívnak kell lennie.");
});

test('Rendes értékekkel nem dob errort', () => {
    expect(() => eloadas).not.toThrow();
});

test('Csak az egyik alsó határnál errort dob vissza', () => {
    expect(() => new Eloadas(0, 3)).toThrow("A bevitelnek pozitívnak kell lennie.");
});

test('Csak a másik alsó határnál errort dob vissza', () => {
    expect(() => new Eloadas(3, 0)).toThrow("A bevitelnek pozitívnak kell lennie.");
});

test('Alsó pozitív határoknál nem dob errort', () => {
    expect(() => new Eloadas(1, 1)).not.toThrow();
});

test('A class tényleg létrehozza a mátrixot', () => {
    expect(eloadas.foglalasok).not.toBeNull();
});

test('A mátrix megfelelő nagyságú sorral rendelkezik', () => {
    expect(eloadas.foglalasok.length).toEqual(10);
});

test('A mátrix megfelelő nagyságú oszloppal rendelkezik', () => {
    expect(eloadas.foglalasok[0].length).toEqual(10);
});

test('A mátrix default false értékekkel jön létre', () => {
    ures = true;
    for (let i = 0; i < eloadas.foglalasok.length; i++) {
        for (let j = 0; j < eloadas.foglalasok[i].length; j++) {
            if(eloadas.foglalasok[i][j]){
                ures = false;
            }
        }
    }
    expect(ures).toEqual(true);
});

test('A lefoglal metódus tényleg lefoglal', () => {
    expect(eloadas.lefoglal()).toEqual(true);
});

test('A lefoglal metódus az első helyet foglalja le', () => {
    eloadas.lefoglal();
    expect(eloadas.foglalasok[0][0]).toEqual(true);
});

test('A lefoglal metódus képes a második helyet is lefoglalni', () => {
    eloadas.lefoglal();
    eloadas.lefoglal();
    expect(eloadas.foglalasok[0][1]).toBe(true);
});

test('A lefoglal metódus képes az első és második helyet is lefoglalni', () => {
    eloadas.lefoglal();
    eloadas.lefoglal();
    expect(eloadas.foglalasok[0][0]).toBe(true);
    expect(eloadas.foglalasok[0][1]).toBe(true);
});

test('A szabad helyek metódus tényleg jól számol', () => {
    eloadas = new Eloadas(10, 10);
    expect(eloadas.getSzabadHelyek()).toBe(100);
});

test('A szabad helyek metódus tényleg jól számol nem üres teremmel', () => {
    eloadas.lefoglal();
    expect(eloadas.getSzabadHelyek()).toBe(99);
});

test('A szabad helyek metódus tényleg jól számol sok lefoglalással', () => {
    eloadas = new Eloadas(10, 10);
    eloadas.lefoglal();
    eloadas.lefoglal();
    eloadas.lefoglal();
    eloadas.lefoglal();
    eloadas.lefoglal();
    eloadas.lefoglal();
    expect(eloadas.getSzabadHelyek()).toBe(94);
});

test('A szabad helyek metódus tényleg jól számol majdnem tele teremmel', () => {
    eloadas = new Eloadas(1, 6);
    eloadas.lefoglal();
    eloadas.lefoglal();
    eloadas.lefoglal();
    eloadas.lefoglal();
    eloadas.lefoglal();
    expect(eloadas.getSzabadHelyek()).toBe(1);
});

test('A teli metódus jól számol üres teremmel', () => {
    eloadas = new Eloadas(10, 10);
    expect(eloadas.getTeli()).toBe(false);
})

test('A teli metódus jól számol nem teljesen üres teremmel', () => {
    eloadas.lefoglal();
    expect(eloadas.getTeli()).toBe(false);
})

test('A teli metódus jól számol több foglalással', () => {
    eloadas.lefoglal();
    eloadas.lefoglal();
    eloadas.lefoglal();
    eloadas.lefoglal();
    expect(eloadas.getTeli()).toBe(false);
})

test('A teli metódus jól számol teli teremmel', () => {
    eloadas = new Eloadas(1, 5);
    eloadas.lefoglal();
    eloadas.lefoglal();
    eloadas.lefoglal();
    eloadas.lefoglal();
    eloadas.lefoglal();
    expect(eloadas.getTeli()).toBe(true);
})

test('A foglalt metódus működik ha nem foglalt', () => {
    eloadas = new Eloadas(10, 10);
    expect(eloadas.Foglalt(1, 1)).toBe(false);
})

test('A foglalt metódus működik ha foglalt', () => {
    eloadas.lefoglal();
    expect(eloadas.Foglalt(1, 1)).toBe(true);
})

test('A foglalt metódus működik ha nem foglalt nem csak az első', () => {
    eloadas = new Eloadas(10, 10);
    expect(eloadas.Foglalt(5, 6)).toBe(false);
})

test('A foglalt metódus működik ha nem foglalt de van foglalt', () => {
    eloadas.lefoglal();
    expect(eloadas.Foglalt(5, 6)).toBe(false);
})

test('A foglalt metódus működik ha több foglalt', () => {
    eloadas.lefoglal();
    eloadas.lefoglal();
    eloadas.lefoglal();
    eloadas.lefoglal();
    eloadas.lefoglal();
    expect(eloadas.Foglalt(1, 3)).toBe(true);
})

test('A foglalt metódus felső értéke működik ha tele a terem', () => {
    eloadas = new Eloadas(1, 5);
    eloadas.lefoglal();
    eloadas.lefoglal();
    eloadas.lefoglal();
    eloadas.lefoglal();
    eloadas.lefoglal();
    expect(eloadas.Foglalt(1, 5)).toBe(true);
})

test('A foglalt metódus működik ha majdnem tele a terem', () => {
    eloadas = new Eloadas(1, 5);
    eloadas.lefoglal();
    eloadas.lefoglal();
    eloadas.lefoglal();
    eloadas.lefoglal();
    expect(eloadas.Foglalt(1, 5)).toBe(false);
})

test('A foglalt metódus működik ha tele a terem és nem szélső érték', () => {
    eloadas = new Eloadas(1, 5);
    eloadas.lefoglal();
    eloadas.lefoglal();
    eloadas.lefoglal();
    eloadas.lefoglal();
    eloadas.lefoglal();
    expect(eloadas.Foglalt(1, 3)).toBe(true);
})

test('A foglalt metódus alsó értéke működik ha majdnem tele a terem', () => {
    eloadas = new Eloadas(1, 5);
    eloadas.lefoglal();
    eloadas.lefoglal();
    eloadas.lefoglal();
    eloadas.lefoglal();
    expect(eloadas.Foglalt(1, 1)).toBe(true);
})