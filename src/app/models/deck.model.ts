export class Deck {
  public dateCreated: Date = new Date();
  public cardList: Object[] = [];
  constructor (
    public deckTitle: string,
  ) { }
}
