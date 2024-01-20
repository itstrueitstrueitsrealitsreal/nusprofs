package db

import (
	"context"
	"log"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type dbwrapper struct {
	db_client *mongo.Client
}

func (wrapped_client dbwrapper) connect_db() {
	user := "" // add user here.
	pw := "" // add pw here.
	URI := "mongodb+srv://" + user + ":" + pw + "@cluster-1.4uefyrz.mongodb.net/"
	server := options.ServerAPI(options.ServerAPIVersion1)
	opts := options.Client().ApplyURI(URI).SetServerAPIOptions(server)
	client, err := mongo.Connect(context.TODO(), opts)
	if err != nil {
		log.Fatal(err)
	}
	var result bson.M
	if err := client.Database("admin").RunCommand(context.TODO(),
		bson.D{{"ping", 1}}).Decode(&result); err != nil {
		log.Fatal(err)
	}
	wrapped_client.db_client = client
}