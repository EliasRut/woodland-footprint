import ForestType from "../../types/ForestType";

export function ForestDescription(props: { forestType: ForestType }) {
  switch (props.forestType) {
    case ForestType.LIGHT: {
      return (
        <div>
          <p>
            Mischwald ist ein vorwiegend umgangssprachlich genutzter Begriff,
            der Wälder bezeichnet, in denen mehrere Baumarten z. B. Laub- und
            Nadelbäume gemeinsam vorkommen. Aus ökologischer Sicht ist
            Voraussetzung, dass jede Baumart ausreichend vorhanden ist, um eine
            artspezifische Rolle im Ökosystem zu übernehmen. Die
            Forsteinrichtung spricht von Mischbeständen, sobald die Beimischung
            mindestens 5 % der Fläche beträgt.
          </p>
          <p>
            Mischwälder können unterteilt werden in Laubmischwälder, in denen
            vorwiegend oder ausschließlich verschiedene Laubbaumarten vorkommen,
            und in Nadelmischwälder, in denen vorwiegend oder ausschließlich
            verschiedene Nadelbaumarten vorkommen. Bei der Benennung von
            Mischwaldtypen gilt in der Regel, dass die dominierende Baumart,
            Gattung, Familie usw. an zweiter Stelle mit dem Wort Wald verbunden
            wird: Ein Tannen-Buchenwald ist demnach ein Rotbuchenwald, in dem
            auch häufig Tannen (als Anzeiger der montanen Höhenstufe) vorkommen
            und ein Laub-Nadelmischwald ist ein Nadelwald, in dem auffallend
            viele verschiedene Laubhölzer vorkommen.
          </p>
          <p>
            In Forstwissenschaft und Vegetationskunde findet die Bezeichnung
            Mischwald ohne weitere Zusätze nur sehr selten Verwendung.
            Stattdessen werden exaktere Begriffe wie beispielsweise
            Stieleichen-Hainbuchen-Wald oder Erlen-Eschen-Auwald benutzt. Üblich
            ist aber der Ausdruck Bergmischwald, für Mischwälder aus Fichte,
            Tanne und Rotbuche, oft unter Beteiligung weiterer Arten, in der
            montanen Höhenstufe der süddeutschen Mittelgebirge und der Alpen.
          </p>
        </div>
      );
    }
    case ForestType.MODERATE: {
      return (
        <div>
          <p>
            Mischwald ist ein vorwiegend umgangssprachlich genutzter Begriff,
            der Wälder bezeichnet, in denen mehrere Baumarten z. B. Laub- und
            Nadelbäume gemeinsam vorkommen. Aus ökologischer Sicht ist
            Voraussetzung, dass jede Baumart ausreichend vorhanden ist, um eine
            artspezifische Rolle im Ökosystem zu übernehmen. Die
            Forsteinrichtung spricht von Mischbeständen, sobald die Beimischung
            mindestens 5 % der Fläche beträgt.
          </p>
          <p>
            Mischwälder können unterteilt werden in Laubmischwälder, in denen
            vorwiegend oder ausschließlich verschiedene Laubbaumarten vorkommen,
            und in Nadelmischwälder, in denen vorwiegend oder ausschließlich
            verschiedene Nadelbaumarten vorkommen. Bei der Benennung von
            Mischwaldtypen gilt in der Regel, dass die dominierende Baumart,
            Gattung, Familie usw. an zweiter Stelle mit dem Wort Wald verbunden
            wird: Ein Tannen-Buchenwald ist demnach ein Rotbuchenwald, in dem
            auch häufig Tannen (als Anzeiger der montanen Höhenstufe) vorkommen
            und ein Laub-Nadelmischwald ist ein Nadelwald, in dem auffallend
            viele verschiedene Laubhölzer vorkommen.
          </p>
          <p>
            In Forstwissenschaft und Vegetationskunde findet die Bezeichnung
            Mischwald ohne weitere Zusätze nur sehr selten Verwendung.
            Stattdessen werden exaktere Begriffe wie beispielsweise
            Stieleichen-Hainbuchen-Wald oder Erlen-Eschen-Auwald benutzt. Üblich
            ist aber der Ausdruck Bergmischwald, für Mischwälder aus Fichte,
            Tanne und Rotbuche, oft unter Beteiligung weiterer Arten, in der
            montanen Höhenstufe der süddeutschen Mittelgebirge und der Alpen.
          </p>
        </div>
      );
    }
    case ForestType.HEAVY: {
      return (
        <div>
          <p>
            Ein Nadelwald ist ein Wald, in dessen Baumschicht fast
            ausschließlich Nadelbäume zu finden sind.
          </p>
          <p>
            Natürliche Nadelwälder wachsen in der borealen Zone in kalten
            Klimaten als boreale Nadelwälder. In Mitteleuropa werden heute im
            Allgemeinen Nadelwälder in den Hochlagen der Mittelgebirge und in
            den Alpen als natürliche Wälder angesehen, die ähnliches Klima
            aufweisen. Im Westen Europas steigt der Laubwald, vor allem der
            Rotbuchenwald, höher (2000 m) hinauf als im Osten und Norden (1000
            bis 1400 m).
          </p>
          <p>
            Unterschiedliche Auffassungen gibt es über das natürliche Vorkommen
            im Flachland. In besonders trockenen Gebieten kann Kiefernwald die
            potenzielle natürliche Vegetation darstellen. Dies ist z. B. in den
            trockenwarmen Gebieten des Südwestens der USA, in Südwesteuropa oder
            in den Karstgebieten des Balkans und der Alpen der Fall. Vereinzelt
            können sehr ungünstige Lagen natürliche Nadelholzstandorte im
            Flachland darstellen (Nordhänge, Kaltluftseen).
          </p>
          <p>
            Im Sprachgebrauch der Vegetationskundler wird zwischen natürlich und
            spontan entstandenen Wäldern und auf künstliche Pflanzung von
            Baumarten zurückgehenden Forsten unterschieden, die in der
            Allgemeinsprache ebenso Wälder genannt werden. Die ausgedehnten
            Kiefern- und Fichtenforste im Tiefland Mitteleuropas und viele
            Wälder Nordamerikas sind ausschließlich vom Menschen angepflanzt
            bzw. gefördert worden, da dort natürlicherseits
            Laubwaldgesellschaften zu finden wären. Sie sind meist Ende des 18.
            Jahrhunderts angelegt worden, als die durch das Wirken von Cotta
            neuentstandene Forstwirtschaft die Wiederbewaldung des damals sehr
            waldarmen Mitteleuropas fördern sollte. Viele Böden waren damals
            durch den Raubbau ausgemagert und boten nur noch den anspruchslosen
            und widerstandsfähigen Nadelgehölzen ausreichend Chancen (Geschichte
            des Waldes in Mitteleuropa). Im Norden Nordamerikas wurde das
            wertvolle Laubholz stärker eingeschlagen als das Nadelholz, so dass
            sich die Nadelhölzer ausbreiten konnten. Die Forste wurden später
            behalten, da Nadelholz sehr schnell und gerade wächst und so
            schneller Profit bringt. Inzwischen setzt jedoch ein Umdenken ein
            und einige der anfälligen und pflegeintensiven Nadelholzforste
            werden zu Mischwäldern umerzogen (Waldumbau).
          </p>
        </div>
      );
    }
    case ForestType.JUNGLE: {
      return (
        <div>
          <p>
            Mischwald ist ein vorwiegend umgangssprachlich genutzter Begriff,
            der Wälder bezeichnet, in denen mehrere Baumarten z. B. Laub- und
            Nadelbäume gemeinsam vorkommen. Aus ökologischer Sicht ist
            Voraussetzung, dass jede Baumart ausreichend vorhanden ist, um eine
            artspezifische Rolle im Ökosystem zu übernehmen. Die
            Forsteinrichtung spricht von Mischbeständen, sobald die Beimischung
            mindestens 5 % der Fläche beträgt.
          </p>
          <p>
            Mischwälder können unterteilt werden in Laubmischwälder, in denen
            vorwiegend oder ausschließlich verschiedene Laubbaumarten vorkommen,
            und in Nadelmischwälder, in denen vorwiegend oder ausschließlich
            verschiedene Nadelbaumarten vorkommen. Bei der Benennung von
            Mischwaldtypen gilt in der Regel, dass die dominierende Baumart,
            Gattung, Familie usw. an zweiter Stelle mit dem Wort Wald verbunden
            wird: Ein Tannen-Buchenwald ist demnach ein Rotbuchenwald, in dem
            auch häufig Tannen (als Anzeiger der montanen Höhenstufe) vorkommen
            und ein Laub-Nadelmischwald ist ein Nadelwald, in dem auffallend
            viele verschiedene Laubhölzer vorkommen.
          </p>
          <p>
            In Forstwissenschaft und Vegetationskunde findet die Bezeichnung
            Mischwald ohne weitere Zusätze nur sehr selten Verwendung.
            Stattdessen werden exaktere Begriffe wie beispielsweise
            Stieleichen-Hainbuchen-Wald oder Erlen-Eschen-Auwald benutzt. Üblich
            ist aber der Ausdruck Bergmischwald, für Mischwälder aus Fichte,
            Tanne und Rotbuche, oft unter Beteiligung weiterer Arten, in der
            montanen Höhenstufe der süddeutschen Mittelgebirge und der Alpen.
          </p>
        </div>
      );
    }
    default: {
      return <div>Keine Daten</div>;
    }
  }
}
