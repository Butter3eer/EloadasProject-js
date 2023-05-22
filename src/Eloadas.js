class Eloadas {
    constructor(sorokSzama, helyekSzama) {
        if (sorokSzama <= 0 || helyekSzama <= 0){
            throw new Error("A bevitelnek pozitívnak kell lennie.");
        }
        else{
            this.foglalasok = new Array(sorokSzama);
            for (let i = 0; i < sorokSzama; i++) {
                this.foglalasok[i] = new Array(helyekSzama).fill(false);
            }
        }
    }

    lefoglal() {
        let sorokSzama = this.foglalasok.length;
        let oszlopSzama = this.foglalasok[0].length;

        for (let sor = 0; sor < sorokSzama; sor++)
        {
            for (let oszlop = 0; oszlop < oszlopSzama; oszlop++)
            {
                if (!this.foglalasok[sor][oszlop])
                {
                    this.foglalasok[sor][oszlop] = true;
                    return true;
                }
            }
        }
        return false;
    }

    getSzabadHelyek() {
        let db = 0;
        for (let i = 0; i < this.foglalasok.length; i++) {
            for (let j = 0; j < this.foglalasok[i].length; j++) {
                if(!this.foglalasok[i][j]){
                    db += 1;
                }
            }
        }
        return db;
    }

    getTeli() {
        for (let i = 0; i < this.foglalasok.length; i++) {
            for (let j = 0; j < this.foglalasok[0].length; j++) {
                if(!this.foglalasok[i][j]){
                    return false;
                }
            }
        }
        return true;
    }

    Foglalt(sorSzam, helySzam) {
        if (sorSzam < 1 || helySzam < 1){
            throw new Error("A bevitelnek pozitívnak kell lennie.");
        }
        else {
            if(!this.foglalasok[sorSzam - 1][helySzam - 1]){
                return false;
            }

            return true;
        }    
    }
}

module.exports = Eloadas;