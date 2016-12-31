/**
 * Created by Lula on 7/8/2016.
 */
export class DestinationModel {
  constructor(
    public placeName: string,
    public countryName: string,
    public historyTags: {}[],
    public artTags: {}[],
    public books: {}[],
    public advices: {}[],
    public _id?:string,
    public likes?:number
) {  }
}
