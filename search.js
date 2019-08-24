
class  Search{
  constructor(data){
    this.data = data
  }

  roll(roll){
    return this.data.find(i => i.roll == roll)
  }
}

module.exports = Search;
