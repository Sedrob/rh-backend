import { HttpException, HttpStatus } from "@nestjs/common";
import { isNotEmpty } from "class-validator";

//"http://5.189.193.45:8080/telesat/hs/services/RS8S/telemetry?DateFrom=2024-01-01T00:00:00&DateTo=2024-05-31T23:59:59&parameters=TempB1,TempB2,CAKB&key=UvHsIqCHFWMljiuorYzs6MKVFGf62cfqCXSIMKdKEMBa8bu6ZONVBDgtB2dwOeXZ";
const url = 'http://5.189.193.45:8080/telesat/hs/services/RS8S/telemetry?';
const key = 'UvHsIqCHFWMljiuorYzs6MKVFGf62cfqCXSIMKdKEMBa8bu6ZONVBDgtB2dwOeXZ';

export class UrlSatellites{
    public async createUrl(query: any){
        let getUrl = url;
        let datefrom = String(query["DateFrom"]);
        let dateTo = String(query["DateTo"]);
        let parameters = String(query["parameters"]);
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
        return getUrl + 'key=' + key 
    }
}