package com.example.demo.controller;

public class TodoTask {
    private int id;
    private String name;
    private String tBody;
    private int priority;

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getBody() {
        return tBody;
    }

    public int getPriority() {
        return priority;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void settBody(String tBody) {
        this.tBody = tBody;
    }

    public void setPriority(int priority) {
        this.priority = priority;
    }
}
