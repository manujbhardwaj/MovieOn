package com.cs5200.project.repository;

import com.cs5200.project.entity.AddressEntity;
import com.cs5200.project.entity.AdminNoteEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdminNoteRepository extends CrudRepository<AdminNoteEntity, Integer> {

}
