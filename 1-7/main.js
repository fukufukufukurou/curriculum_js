class Taiyaki{
  constructor(name){
    this.name=name;
  }
  contents(){
    console.log(`中身は${this.name}です`);
  }
}

let anko=new Taiyaki('あんこ');
anko.contents();

let kurimu=new Taiyaki('クリーム');
kurimu.contents();

let tiizu=new Taiyaki('チーズ');
tiizu.contents();