
class  Search{
  constructor(data){
    this.data = data
  }

  roll(roll){
    return this.data.find(i => i.roll == roll)
  }

  name(name){
    const rg = new RegExp(`${name}`,'gi')
    return this.data.find(i => i.name.match(rg))
  }
}

module.exports = Search;
