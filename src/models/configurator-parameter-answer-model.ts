/**
 * The model used to display an answer in configurator-details.
 */
export class ConfiguratorParameterAnswerModel {

    /**
     * Constructor to create an instance of ConfiguratorParameterAnswerModel.
     * @param  {string} id            The id of the answer.
     * @param  {string} summaryDisplay The summary display of the answer.
     * @param  {number} quantity      The quantity of the answer.
     * @param  {string} value         The value of the answer.
     */
    constructor(public id: string, public summaryDisplay: string, public quantity: number, public value: string) {}
}