import * as AWS from 'aws-sdk';
import BaseRepository from "./BaseRepository";

class DynamoDB implements BaseRepository {
  tableName: string;
  dynamoDb: AWS.DynamoDB

  constructor(tableName: string, endpoint: string, region: string) {
    this.tableName = tableName;
    this.dynamoDb = new AWS.DynamoDB({
      endpoint,
      region,
    });
  }

  putItem = (): Promise<any> => new Promise((resolve, reject) => {
    
    this.dynamoDb.putItem()
  });

  findOne = () => {

  }
  findAll = () => {

  }
  save = () => {

  }
  create = () => {

  }
  update = () => {

  }
  delete = () => {

  }
}

export default DynamoDB;
