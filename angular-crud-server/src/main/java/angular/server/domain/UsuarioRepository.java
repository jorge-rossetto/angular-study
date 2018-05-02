package angular.server.domain;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class UsuarioRepository {

    private static Map<Long, Usuario> usuarios = new HashMap<Long, Usuario>();

    static {
        usuarios.put(1L, new Usuario(1L, "Jorge", "jorgerst@gmail.com", LocalDate.now().plusDays(2)));
        usuarios.put(2L, new Usuario(2L, "Leo", "leo@serpro.gov.br", LocalDate.now()));
        usuarios.put(3L, new Usuario(3L, "Aline", "aline@gmail.com", LocalDate.now().minusDays(40)));
        usuarios.put(4L, new Usuario(4L, "Altair", "altair@serpro.gov.br", LocalDate.now().minusYears(3)));
        usuarios.put(5L, new Usuario(5L, "Coronel", "coronel@gmail.com", LocalDate.now().minusMonths(4)));
        usuarios.put(6L, new Usuario(6L, "Daniel", "daniel@serpro.gov.br", LocalDate.now().minusMonths(20)));
        
//        cadastrarMaisUmMonteDeUsuarios();
    }

    public void create(Usuario usuario) {
        usuario.setId(nextId());
        usuarios.put(usuario.getId(), usuario);
    }

    private static Long nextId() {
        if (usuarios.isEmpty()) {
            return 1L;
        } else {
            Long maiorId = Collections.max(usuarios.keySet());
            return maiorId + 1L;
        }
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
    
    @SuppressWarnings("unused")
    private static void cadastrarMaisUmMonteDeUsuarios() {
        
        LocalDate dataNascimento = LocalDate.now();
        
        for (long nextId = nextId(); nextId < 10000; nextId++) {
            Usuario usuario = new Usuario();
            usuario.setId(nextId);
            usuario.setNome("Usuário " + nextId);
            usuario.setEmail("email@usuario" + nextId);
            usuario.setDataNascimento(dataNascimento);
            
            usuarios.put(nextId, usuario);
        }
    }

}