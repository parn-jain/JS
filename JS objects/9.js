class circle
{
    constructor(radious)
    {
        this.radious = radious
    }

    parimiter()
    {
        const a = 2*Math.PI*this.radious
        return a
    }

    area()
    {
        const b = Math.PI*this.radious*this.radious
        return b
    }
}

const c = new circle(4)
console.log(c.parimiter())
console.log(c.area())