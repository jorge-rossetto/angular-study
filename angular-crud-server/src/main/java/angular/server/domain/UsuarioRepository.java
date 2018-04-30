package angular.server.domain;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class UsuarioRepository {

    private static Map<Long, Usuario> usuarios = new HashMap<Long, Usuario>();
    
    static {
        usuarios.put(1L, new Usuario(1L, "Jorge", "jorgerst@gmail.com"));
        usuarios.put(2L, new Usuario(2L, "Leo", "leo@serpro.gov.br"));
        usuarios.put(3L, new Usuario(3L, "Aline", "aline@gmail.com"));
        usuarios.put(4L, new Usuario(4L, "Altair", "altair@serpro.gov.br"));
        usuarios.put(5L, new Usuario(5L, "Coronel", "coronel@gmail.com"));
        usuarios.put(6L, new Usuario(6L, "Daniel", "daniel@serpro.gov.br"));
    }
    
    public void create(Usuario usuario) {
        usuario.setId(nextId());
        usuarios.put(usuario.getId(), usuario);
    }

    private Long nextId() {
    	Long maiorId = Collections.max(usuarios.keySet());
        return maiorId + 1L;
    }

    public List<Usuario> readAll() {
        return new ArrayList<Usuario>(usuarios.values());
    }

    public Usuario readById(Long id) {
        return usuarios.get(id);
    }

    public void update(Usuario usuario) {
        usuarios.put(usuario.getId(), usuario);
    }

    public void delete(Long id) {
        usuarios.remove(id);
    }

}