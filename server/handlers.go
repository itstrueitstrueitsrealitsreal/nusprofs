package main

import (
	"github.com/gin-gonic/gin"
)

type ReadRequest struct {
}

type WriteRequest struct {
}

func writeToMongo(ctx *gin.Context) {
	var request WriteRequest
	if err := ctx.BindJSON(&request); err != nil {
		return
	}
	// Write function here
}

func readFromMongo(ctx *gin.Context) {
	var request ReadRequest
	if err := ctx.BindJSON(&request); err != nil {
		return
	}
	// Read function here
}
