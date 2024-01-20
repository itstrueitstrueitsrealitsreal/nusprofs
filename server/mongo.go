package main

import (
	"context"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type dbwrapper struct {
	db_client *mongo.Client
}

func (wrapped_client dbwrapper) connect_mongo_db(ctx context.Context) error {
	user := "" // add user here.
	pw := ""   // add pw here.
	URI := "mongodb+srv://" + user + ":" + pw + "@cluster-1.4uefyrz.mongodb.net/"
	server := options.ServerAPI(options.ServerAPIVersion1)
	opts := options.Client().ApplyURI(URI).SetServerAPIOptions(server)
	client, err := mongo.Connect(ctx, opts)
	if err != nil {
		return err
	}
	var result bson.M
	if err := client.Database("admin").RunCommand(ctx,
		bson.D{{"ping", 1}}).Decode(&result); err != nil {
		return err
	}
	wrapped_client.db_client = client
	return nil
}
