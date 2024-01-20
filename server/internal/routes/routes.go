package routes

import (
	"encoding/json"
	"net/http"

	"github.com/go-chi/chi/v5"
)

func respondWithError(w http.ResponseWriter, statusCode int, errorMessage string) {
	w.WriteHeader(statusCode)
	err := json.NewEncoder(w).Encode(map[string]string{"error": errorMessage})
	if err != nil {
		http.Error(w, "Error encoding JSON response", http.StatusInternalServerError)
	}
}

func GetRoutes() func(r chi.Router) {
	return func(r chi.Router) {
		// Default route
		r.Get("/", func(w http.ResponseWriter, req *http.Request) {
			w.WriteHeader(http.StatusOK)
			_, err := w.Write([]byte("OK"))
			if err != nil {
				respondWithError(w, http.StatusInternalServerError, "Error writing response")
			}
		})
		r.Get("/*", func(w http.ResponseWriter, req *http.Request) {
			http.Redirect(w, req, "/", http.StatusMovedPermanently)
		})

	}
}
