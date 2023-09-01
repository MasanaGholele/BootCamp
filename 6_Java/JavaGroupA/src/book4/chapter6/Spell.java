package book4.chapter6;

import java.util.ArrayList;

public class Spell {
    @Override
    public String toString() {
        return "Spell{" +
                "name='" + name + '\'' +
                ", type=" + type +
                ", description='" + description + '\'' +
                '}';
    }

    public String name;
    public SpellType type;


    public static void main(String[] args) {

        ArrayList<Spell> spells = new ArrayList<>();

        spells.add(new Spell("Aparecium", Spell.SpellType.SPELL,
                "Makes invisible ink appear."));

        spells.add(new Spell("Avis", Spell.SpellType.SPELL,
                "Launches birds from your wand."));

        spells.add(new Spell("Engorgio", Spell.SpellType.CHARM,
                "Enlarges something."));

        spells.add(new Spell("Fidelius", Spell.SpellType.CHARM,
                "Hides a secret within someone."));

        spells.add(new Spell("Finite Incatatum", Spell.SpellType.SPELL,
                "Stops all current spells."));

        spells.add(new Spell("Locomotor Mortis", Spell.SpellType.CURSE,
                "Locks an opponent's legs."));

//        for (Spell spell : spells) {
//            System.out.println(spell);

//    }
//        spells.stream().forEach(s -> System.out.println(s));

//                     System.out.println(spell);
//    }
//
//        for (Spell spell : spells)
//        {
//            if (spell.type == Spell.SpellType.SPELL)
//                System.out.println(spell.name);
//        }
//
//        spells.stream()
//                .filter(s -> s.type == Spell.SpellType.SPELL)
//                .forEach(s -> System.out.println(s));

        spells.stream().filter(s -> s.type == Spell.SpellType.SPELL)
                .filter(s -> s.name.toLowerCase().startsWith("a"))
                .forEach(s -> System.out.println(s));


    }

    public String description;

    public Spell(String name, SpellType type, String description) {
        this.name = name;
        this.type = type;
        this.description = description;
    }

    public enum SpellType {SPELL, CHARM, CURSE}


}
