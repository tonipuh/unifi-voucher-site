/**
 * Convert time minutes
 *
 * @param minutes
 * @param language
 * @returns {string}
 */
module.exports = (minutes, language = 'en') => {
    const translations = {
        en: {
            minute: 'minute',
            minutes: 'minutes',
            hour: 'hour',
            hours: 'hours',
            day: 'day',
            days: 'days'
        },
        fi: {
            minute: 'minuutti',
            minutes: 'minuuttia',
            hour: 'tunti',
            hours: 'tuntia',
            day: 'päivä',
            days: 'päivää'
        },
        de: {
            minute: 'Minute',
            minutes: 'Minuten',
            hour: 'Stunde',
            hours: 'Stunden',
            day: 'Tag',
            days: 'Tage'
        },
        fr: {
            minute: 'minute',
            minutes: 'minutes',
            hour: 'heure',
            hours: 'heures',
            day: 'jour',
            days: 'jours'
        },
        es: {
            minute: 'minuto',
            minutes: 'minutos',
            hour: 'hora',
            hours: 'horas',
            day: 'día',
            days: 'días'
        },
        nl: {
            minute: 'minuut',
            minutes: 'minuten',
            hour: 'uur',
            hours: 'uren',
            day: 'dag',
            days: 'dagen'
        },
        pl: {
            minute: 'minuta',
            minutes: 'minut',
            hour: 'godzina',
            hours: 'godzin',
            day: 'dzień',
            days: 'dni'
        },
        da: {
            minute: 'minut',
            minutes: 'minutter',
            hour: 'time',
            hours: 'timer',
            day: 'dag',
            days: 'dage'
        },
        ru: {
            minute: 'минута',
            minutes: 'минут',
            hour: 'час',
            hours: 'часов',
            day: 'день',
            days: 'дней'
        }
    };

    // Default to English if language not found
    const t = translations[language] || translations.en;

    if (minutes < 60) {
        return `${minutes} ${minutes === 1 ? t.minute : t.minutes}`;
    }

    const hours = minutes / 60;

    if (hours < 24) {
        const hourValue = hours % 1 === 0 ? hours : hours.toFixed(2);
        return `${hourValue} ${hours === 1 ? t.hour : t.hours}`;
    }

    const days = hours / 24;
    return `${days} ${days === 1 ? t.day : t.days}`;
}
