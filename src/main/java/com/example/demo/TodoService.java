package com.example.demo;

import com.example.demo.entities.Todo;


import com.example.demo.tables.records.TodoRecord;
import javassist.runtime.Desc;
import org.jooq.DSLContext;
import org.jooq.Record;
import org.jooq.Result;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

import static com.example.demo.tables.Todo.TODO;

@Service
@Transactional
public class TodoService {

    @Autowired
    private DSLContext dsl;

    public Todo create (Todo todo) {
        TodoRecord todoRecord = dsl.insertInto(TODO)
                .set(TODO.NAME, todo.getName())
                .set(TODO.TASK, todo.getTask())
                .set(TODO.PRIORITY, todo.getPriority())
                .returning(TODO.ID)
                .fetchOne();

        todo.setId(todoRecord.getId());
        return todo;
    }

    public List<Todo> getAllTodo(){
        List<Todo> tasks = new ArrayList<>();
        Result<Record> result = dsl.select().from(TODO).fetch();
        for (Record r : result) {
            tasks.add(getTodoEntity(r));
        }
        return tasks ;
    }

    public int getLastId() {
        Record record = dsl.select()
                .from(TODO)
                .orderBy(TODO.ID.desc())
                .limit(1)
                .fetchOne();

        if(record != null) {
            Todo todo = getTodoEntity(record);
            return todo.getId();
        }
        return 0;
    }

    public void putTask(int priority, int id) {
                dsl.update(TODO)
                .set(TODO.PRIORITY,priority)
                .where(TODO.ID.eq(id))
                .execute();
    }

    public Todo getTodo (Integer todoId) {
        Record record = dsl.select()
                .from(TODO)
                .where(TODO.ID.eq(todoId))
                .fetchOne();
        if(record != null) {
            Todo todo = getTodoEntity(record);
            return todo;
        }
        return null;
    }

    public Todo createTodo(Todo todo){
        TodoRecord todoRecord = dsl.insertInto(TODO)
                .set(TODO.ID, todo.getId())
                .set(TODO.NAME, todo.getName())
                .set(TODO.TASK, todo.getTask())
                .set(TODO.PRIORITY, todo.getPriority())
                .returning(TODO.ID)
                .fetchOne();

        todo.setId(todoRecord.getId());
        return todo;
    }

    public void deleteTodo(Integer todoId){
        dsl.deleteFrom(TODO)
                .where(TODO.ID.equal(todoId))
                .execute();
    }

    private Todo getTodoEntity(Record r){
        Integer id = r.getValue(TODO.ID, Integer.class);
        String name = r.getValue(TODO.NAME, String.class);
        String task = r.getValue(TODO.TASK, String.class);
        Integer priority = r.getValue(TODO.PRIORITY,Integer.class);

        return new Todo(id, name, task, priority);
    }
}
