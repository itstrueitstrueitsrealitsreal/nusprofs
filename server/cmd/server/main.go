package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/itstrueitstrueitsrealitsreal/nusprofs/server/internal/router"
)

func main() {
	r := router.Setup()
	fmt.Print("Listening on port 8000 at http://localhost:8000!\n")

	log.Fatalln(http.ListenAndServe(":8000", r))
}
