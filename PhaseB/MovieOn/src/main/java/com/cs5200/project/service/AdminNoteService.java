package com.cs5200.project.service;

import com.cs5200.project.entity.AddressEntity;
import com.cs5200.project.entity.AdminNoteEntity;
import com.cs5200.project.repository.AddressRepository;
import com.cs5200.project.repository.AdminNoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminNoteService {

    @Autowired
    private AdminNoteRepository adminNoteRepository;

    public AdminNoteEntity contactAdmin(AdminNoteEntity note) {
        return adminNoteRepository.save(note);
    }

    public List<AdminNoteEntity> getAllNote() {
        return (List<AdminNoteEntity>) adminNoteRepository.findAll();
    }

    public void deleteNote(int noteId) {
        adminNoteRepository.deleteById(noteId);
    }

}
