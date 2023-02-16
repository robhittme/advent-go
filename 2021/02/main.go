package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
)

func parseFile() []string {
	file, err := os.Open("data.txt")
	if err != nil {
		panic(err)
	}

	defer file.Close()

	inventory := []string{}
	sc := bufio.NewScanner(file)
	for sc.Scan() {
		line := sc.Text()
		inventory = append(inventory, line)
	}

	return inventory
}

func splitCommand(s string) int {
    parts := strings.Split(s, " ")
    if len(parts) == 2 {
        num, err := strconv.Atoi(parts[1])
        if err != nil {
            panic(err)
        }
        return num
    }
    return 0

}
func containsWord(s string, word string) bool {
    return strings.Contains(s, word) 
}

func totalDepth(d []string) int {
    f := 0
    depth := 0 
    for _, datum := range d {
        switch {
            case containsWord(datum, "forward"):
                f = f + splitCommand(datum)        
            case containsWord(datum, "down"):
                depth = depth + splitCommand(datum)        
            case containsWord(datum, "up"):
                depth = depth - splitCommand(datum)        
        }
    }
    return f * depth 
}
func totalDepthWithAim(d []string) int {
    horizon := 0
    depth := 0 
    m := 0
    for _, datum := range d {
        switch {
            case containsWord(datum, "forward"):
                horizon = horizon + splitCommand(datum) 
                m = m + depth * splitCommand(datum)
            case containsWord(datum, "down"):
                depth = depth + splitCommand(datum)        
            case containsWord(datum, "up"):
                depth = depth - splitCommand(datum)        
        }
    }
    return horizon * m 
}

func main() {
    fmt.Println(totalDepth(parseFile()))
    fmt.Println(totalDepthWithAim(parseFile()))
}
