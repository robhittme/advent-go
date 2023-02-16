package main

import (
	"fmt"
	"os"
	"bufio"
	"strconv"
)

func parseFile() []int {
	file, err := os.Open("data.txt")
	if err != nil {
		panic(err)
	}

	defer file.Close()

	inventory := []int{}
	sc := bufio.NewScanner(file)
	for sc.Scan() {
		line := sc.Text()
		l, err := strconv.Atoi(line)
		if err != nil {
			panic(err)
		}
		inventory = append(inventory, l)
	}

	return inventory
}

func higherPrevious(d []int) int {
	count := 0
	for i, datum := range d {
		if i == 0 {
			continue
		}
		if datum > d[i - 1] {
			count++
		}
	}
	return count
}

func higherThreePrevious(d []int) []int {
	res := []int{}
	for i := range d {
		if i < 2 {
			continue
		}
		three := d[i] + d[i-1] + d[i-2]
		res = append(res, three)
	}
	return res 
}
func main() {
	fmt.Println(higherPrevious(higherThreePrevious(parseFile())))
}
