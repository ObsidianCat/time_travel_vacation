/**
 * Created by Lula on 7/8/2016.
 */
export class Destination {
  constructor(
    public placeName: string,
    public countryName: string,
    public historyTags: {}[],
    public alterEgo?:String
  ) {  }
}
