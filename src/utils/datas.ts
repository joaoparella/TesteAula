
export default class Datas{
    
    constructor(){
        
    }

    diferencaDias(data: Date){
        var diff = data.getTime() - this.dataAtual().getTime();   
    
        var daydiff = diff / (1000 * 60 * 60 * 24);   
        return daydiff
    }

    adicionarDias(data,dias: number){
        var nDate = data.getDate() + dias;
        data.setDate(nDate);
        
        return data;
    }

    removerDias(data: Date,dias: number){
        var nDate = data.getDate() - dias;
        data.setDate(nDate);
        return data;
    }

    formatar(data: Date){
        let dataFormatada = (data.getFullYear() + "-" + ((data.getMonth() + 1)) + "-" + (data.getDate() )) ;  
        return dataFormatada;
    }

    dataAtual(){
        return new Date()
    }
}