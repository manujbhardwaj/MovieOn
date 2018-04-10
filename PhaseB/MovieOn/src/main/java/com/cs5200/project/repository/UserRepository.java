package com.cs5200.project.repository;

import com.cs5200.project.entity.UserEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<UserEntity, Integer> {

    UserEntity findByUsername(String username);

    UserEntity findById(int userId);

    List<UserEntity> findByType(String type);

}
