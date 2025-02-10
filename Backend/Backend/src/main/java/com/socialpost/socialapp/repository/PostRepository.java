package com.socialpost.socialapp.repository;

import com.socialpost.socialapp.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface PostRepository extends JpaRepository<Post, Long> {
    @Query("SELECT p FROM Post p WHERE LOWER(p.text) LIKE LOWER(CONCAT('%', :query, '%'))")
    List<Post> searchPosts(@Param("query") String query); // Buscar publicaciones con texto similar
}
