class Cylinder
{
    constructor(radious,height)
    {
        this.radious = radious
        this.height = height
    }

    getVolume()

    {
        const volume = Math.PI * Math.pow(this.radious, 2) * this.height;
        return volume.toFixed(4)
    }
}

const cyl = new Cylinder(2,3)
console.log(cyl.getVolume())