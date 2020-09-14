package com.example.demo.entities;

public class Todo {
    private int id;
    private String name;
    private String task;
    private int priority;

    public Todo(){
    }

    public Todo(Integer id, String name, String task, Integer priority)
    {
        super();
        this.id = id;
        this.name = name;
        this.task = task;
        this.priority = priority;
    }

    @Override
    public String toString() {
        return "Task [id =" + id +", name =" + name + ", task =" + task + ",priprity =" + priority;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTask() {
        return task;
    }

    public void setTask(String task) {
        this.task = task;
    }

    public int getPriority() {
        return priority;
    }

    public void setPriority(int priority) {
        this.priority = priority;
    }
}
