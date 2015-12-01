package main

import (
	"math/rand"
	"os"
)

func check(e error) {
	if e != nil {
		panic(e)
	}
}

func main() {

	notes := [7]string{
		"A",
		"B",
		"C",
		"D",
		"E",
		"F",
		"G",
	}

	f, err := os.Create("notes.txt")
	check(err)

	defer f.Close()

	for i := 0; i < 100; i++ {
		_, err := f.WriteString(notes[rand.Intn(7)] + "\n")
		check(err)
	}

}
