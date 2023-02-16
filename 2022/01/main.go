package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"sort"
)

func parseFile() [][]int {
	file, err := os.Open("data.txt")
	if err != nil {
		panic(err)
	}

	defer file.Close()

	inventory := [][]int{}
	sc := bufio.NewScanner(file)
	current := []int{}
	for sc.Scan() {
		line := sc.Text()
		if line == "" {
			inventory = append(inventory, current)
			current = []int{}
		} else {
			n, err := strconv.Atoi(line)
			if err != nil {
				panic(err)
			}

			current = append(current, n)
		}
	}

	return inventory
}


func computeElfCalories(d[][]int) []int {
	var res []int
	for _, c := range d {
		total := 0
		for _, n := range c {
			total += n
		}
		res = append(res, total)
	}
	return res
}

func main() {
	data := parseFile()
	//hc := findHighestCalorie(data)
	computed := computeElfCalories(data)
	sort.Ints(computed)
	lastThree := computed[len(computed)-3:]
	total := 0;
	for _, t := range lastThree {
		total += t
	}
	fmt.Println(total)
}
