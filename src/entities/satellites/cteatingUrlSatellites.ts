import { HttpException, HttpStatus } from "@nestjs/common";
import { isNotEmpty } from "class-validator";

//"http://5.189.193.45:8080/telesat/hs/services/RS8S/telemetry?DateFrom=2024-01-01T00:00:00&DateTo=2024-05-31T23:59:59&parameters=TempB1,TempB2,CAKB&key=UvHsIqCHFWMljiuorYzs6MKVFGf62cfqCXSIMKdKEMBa8bu6ZONVBDgtB2dwOeXZ";
const url = 'http://5.189.193.45:8080/telesat/hs/services/RS8S/telemetry?';//RS8S - название спутника
const key = 'key=UvHsIqCHFWMljiuorYzs6MKVFGf62cfqCXSIMKdKEMBa8bu6ZONVBDgtB2dwOeXZ';

export class UrlSatellites{
    public async createUrl(query: any){
        let getUrl = url;
        let datefrom = String(query["DateFrom"]);
        let dateTo = String(query["DateTo"]);
        let parameters = String(query["parameters"]);
        const tryParametrs = parameters
        switch(parameters){
            case 'TempSQL'://Температура солнечного датчика
                parameters = 'TempSOL1,TempSOL2,TempSOL3,TempSOL4,TempSOL5'
                break;
            case 'PCH': //Ток канала PCH
                parameters = 'C_PCH1,C_PCH2,C_PCH3,C_PCH4'
                break;
            case 'CSOL'://Напряжение ФЭП
                parameters = 'CSOLX,CSOLY,CSOLZ'
                break;
            case 'DUS'://Угловая скорость
                parameters = 'DUSX,DUSY,DUSZ'
                break;
            case 'MAG1'://Магнометр 1
                parameters = 'MAG1X,MAG1Y,MAG1Z'
                break;
            case 'MAG2'://Магнометр 2
                parameters = 'MAG2X,MAG2Y,MAG2Z'
                break;
            case 'TempA'://PL MSD
                parameters = 'TempA1,TempA2,TempA3,TempA4'
                break;
            case 'SolSens1'://Угол солнечного датчика
                parameters = 'SolSens1_X,SolSens1_Y,SolSens1_Z'
                break;
            case 'SolSens2':
                parameters = 'SolSens2_X,SolSens2_Y,SolSens2_Z'
                break;
            case 'SolSens3':
                parameters = 'SolSens3_X,SolSens3_Y,SolSens3_Z'
                break;
            case 'SolSens4':
                parameters = 'SolSens4_X,SolSens4_Y,SolSens4_Z'
                break;
            case 'SolSens5':
                parameters = 'SolSens5_X,SolSens5_Y,SolSens5_Z'
                break;
            case 'OQV'://Орбитальный кватернион
                parameters = 'OQVW,OQVX,OQVY,OQVZ'
                break;
            case 'OAV'://Скорость в орбитальной
                parameters = 'OAVW,OAVX,OAVY,OAVZ'
                break;
            case 'EQV'://Экватериальный Кватернион
                parameters = 'EQVW,EQVX,EQVY,EQVZ'
                break;
            case 'EAV'://Углавая скорость экватериальной WhRpmXP
                parameters = 'EAVW,EAVX,EAVY,EAVZ'
                break;
            case 'Kalman_Q'://Калман Кватернион
                parameters = 'Kalman_QW,Kalman_QX,Kalman_QY,Kalman_QZ'
                break;
            case 'Kalman_DUS'://Калман Угловая скорость 
                parameters = 'Kalman_DUSX,Kalman_DUSY,Kalman_DUSZ'
                break;
            case 'WhRpm'://Обороты Маховика
                parameters = 'WhRpmXP,WhRpmXM,WhRpmYP,WhRpmYM'
                break;
            default:
                parameters = tryParametrs
        }
        if (datefrom){
            getUrl = getUrl + 'DateFrom=' + datefrom + '&';
        }
        else{
            throw new HttpException('Не верно введена дата начала или вовсе не указана', HttpStatus.BAD_REQUEST)
        } 
        if (dateTo){
            getUrl = getUrl + 'DateTo=' + dateTo + '&';
        }
        else{
            throw new HttpException('Не верно введена дата окончания или вовсе не указана', HttpStatus.BAD_REQUEST)
        } 
        if (parameters){
            getUrl = getUrl + 'parameters=' + parameters + '&';
        }
        else{
            throw new HttpException('Не верно введены категории или вовсе не указаны', HttpStatus.BAD_REQUEST)
        } 
        return getUrl + key 
    }
}