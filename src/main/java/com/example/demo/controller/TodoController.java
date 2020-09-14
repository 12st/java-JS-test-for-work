package com.example.demo.controller;

import com.example.demo.BaseResponse;
import com.example.demo.TodoService;
import com.example.demo.dto.JsonDTO;
import com.example.demo.entities.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("tasks")
public class TodoController {
    private TodoService todoService;

    private final String sharedKey = "SHARED_KEY";

    private static final String SUCCESS_STATUS = "success";
    private static final String ERROR_STATUS = "error";
    private static final int CODE_SUCCESS = 100;
    private static final int AUTH_FAILURE = 102;

    private int counter;


    @Autowired
    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping
    public <List> java.util.List<Todo> getAllTasks() {
        return todoService.getAllTodo();
    }

    @GetMapping("{id}")
    public Todo get(@PathVariable(name = "id") int id) {
        return todoService.getTodo(id);
    }

    @GetMapping("last")
    public int getId() {
        return todoService.getLastId();
    }

    @PostMapping(produces = "application/json")
    public BaseResponse TodoPostController(@RequestBody JsonDTO body) {
        final BaseResponse response;

        if(body != null) {
            counter = todoService.getLastId();
            JsonDTO json = body;
            Todo todo = new Todo();
            todo.setName(json.getName());
            todo.setTask(json.getTask());
            counter++;

            todo.setId(counter);
            todo.setPriority(json.getPriority());

            todoService.createTodo(todo);

            System.out.print(todo.getId());
            response = new BaseResponse(SUCCESS_STATUS, CODE_SUCCESS);

            return response;
        }

        response = new BaseResponse(ERROR_STATUS, 400);
        return response;
    }

    @PutMapping(produces = "application/json")
    public BaseResponse TodoPutController(@RequestBody JsonDTO body) {
        final BaseResponse response;

        if(body != null) {

            JsonDTO json = body;

            todoService.putTask(json.getPriority(), json.getId());
            response = new BaseResponse(SUCCESS_STATUS, CODE_SUCCESS);
            return response;
        }
        response = new BaseResponse(ERROR_STATUS, 400);
        return response;
    }

    @DeleteMapping("{id}")
    public BaseResponse TodoDeleteController( @PathVariable Integer id) {
        final BaseResponse response;
        todoService.deleteTodo(id);
        response = new BaseResponse(SUCCESS_STATUS, CODE_SUCCESS);

        return response;
    }
}
