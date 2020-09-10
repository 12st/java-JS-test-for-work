package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("todo")
public class TodoController {

    @GetMapping
    public String list() {

        return "index";
    }
}


