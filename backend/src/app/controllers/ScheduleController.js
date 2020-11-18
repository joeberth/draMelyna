import { parseISO, startOfDay, endOfDay } from 'date-fns';
import { Op } from 'sequelize';
import Appointment from '../models/Appointment';
import User from '../models/User';

class ScheduleController {
  async index(req, res) {
    const isProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });
    if (!isProvider) {
      return res.status(401).json({ error: ' User is not a provider' });
    }

    const { date } = req.query;
    const parsedDate = parseISO(date);

    const appNoPatient = await Appointment.findAll({
      where: {
        provider_id: req.userId,
        canceled_at: null,
        date: {
          [Op.between]: [startOfDay(parsedDate), endOfDay(parsedDate)],
        },
      },
      order: ['date'],
    });

    const appointments = [];
    const promises = appNoPatient.map(async (a) => {
      if (a.user_id) {
        appointments.push({
          past: a.past,
          id: a.id,
          date: a.date,
          canceled_at: a.canceled_at,
          createdAt: a.createdAt,
          updatedAt: a.updatedAt,
          user_id: a.user_id,
          provider_id: a.provider_id,
          patient: (await User.findByPk(a.user_id)).name,
        });
      }
    });
    await Promise.all(promises);

    return res.json(appointments);
  }
}

export default new ScheduleController();
