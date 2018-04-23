package angular.server.domain;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class UsuarioRepository {

    private static Map<Long, Usuario> usuarios = new HashMap<Long, Usuario>();
    
    static {
        usuarios.put(1L, new Usuario(1L, "Jorge"));
        usuarios.put(2L, new Usuario(2L, "Leo"));
        usuarios.put(3L, new Usuario(3L, "Aline"));
        usuarios.put(4L, new Usuario(4L, "Altair"));
        usuarios.put(5L, new Usuario(5L, "Coronel"));
        usuarios.put(6L, new Usuario(6L, "Daniel"));
    }
    
    public void create(Usuario usuario) {
        createOrUpdate(usuario);
    }

    public List<Usuario> readAll() {
        return new ArrayList<Usuario>(usuarios.values());
    }

    public Usuario readById(Long id) {
        return usuarios.get(id);
    }

    public void update(Usuario usuario) {
        createOrUpdate(usuario);
    }

    public void delete(Long id) {
        usuarios.remove(id);
    }

    private void createOrUpdate(Usuario usuario) {
        usuarios.put(usuario.getId(), usuario);
    }
}