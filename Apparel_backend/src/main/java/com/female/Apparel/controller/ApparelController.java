package com.female.Apparel.controller;

import com.female.Apparel.repo.ApparelRepo;
import com.female.Apparel.entity.Apparel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/apparel")
public class ApparelController {

    @Autowired
    private ApparelRepo apparelRepo;

    @GetMapping
    public List<Apparel> getAllApparel() {
        return apparelRepo.findAll();
    }
}
