var app = new Vue({
    el:'#app',
    data(){
        return{
        skor:5,
        jumlahSoal: 20,
        kunciJawaban: [],
        jawabanSiswa: [],
        hasil: {
            benar:0,
            salah:0,
            nilai:0,

        }
        }
    },
    watch:{
        jawabanSiswa(){
            this.hasil.benar = 0
            this.hasil.salah = 0
            this.hasil.niali = 0
            
            for (let i = 0; i < this.jawabanSiswa.length; i++) {
              if(this.jawabanSiswa[i]=== this.kunciJawaban[i]){
                 this.hasil.benar++
              }else{
                  this.hasil.salah++
              }
                
            }
            this.hasil.nilai = this.hasil.benar * this.skor
        }
    

        
    }
    
})