package main

import (
	"context"
	"fmt"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

var db = &dbwrapper{}

func main() {
	server := gin.Default()
	server.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "im good.",
		})
	})
	err := server.Run()
	if err != nil {
		log.Fatal(err)
	}
	server.GET("/read", readFromMongo)
	server.POST("/write", writeToMongo)
	fmt.Printf("Starting up MongoDB")
	ctx := context.Background()
	err = db.connect_mongo_db(ctx)
	if err != nil {
		log.Fatal(err)
	}
}
